"""empty message

Revision ID: c801b479049e
Revises: 15c000fbc671
Create Date: 2016-10-19 00:43:39.049435

"""

# revision identifiers, used by Alembic.
revision = 'c801b479049e'
down_revision = '15c000fbc671'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('permissions', sa.Integer(), nullable=True))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'permissions')
    ### end Alembic commands ###