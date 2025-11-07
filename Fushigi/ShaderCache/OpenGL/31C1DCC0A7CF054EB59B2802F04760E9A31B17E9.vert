#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    int temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    int temp_10;
    uint temp_11;
    uint temp_12;
    int temp_13;
    precise float temp_14;
    int temp_15;
    uint temp_16;
    int temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    int temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    int temp_34;
    uint temp_35;
    uint temp_36;
    int temp_37;
    precise float temp_38;
    int temp_39;
    uint temp_40;
    uint temp_41;
    int temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400270009 Mov
    // 0x000010: 0xEFD87F801047FF04 Ald
    temp_0 = in_attr8.y;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400370001 Mov
    // 0x000030: 0xEFD87F800807FF0D Ald
    temp_3 = in_attr0.x;
    // 0x000038: 0x3848000000470011 Shl
    temp_4 = temp_2 << 4;
    // 0x000048: 0xEFD87F800847FF18 Ald
    temp_5 = in_attr0.y;
    // 0x000050: 0x51A0049400470409 Ffma
    temp_6 = fma(temp_0, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000058: 0xEFD87F800A07FF17 Ald
    temp_7 = in_attr2.x;
    // 0x000068: 0x51A0009400570404 Ffma
    temp_8 = fma(temp_0, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000070: 0xEFD87F800887FF0A Ald
    temp_9 = in_attr0.z;
    // 0x000078: 0xEF95007048071100 Ldc
    temp_10 = temp_4 + 0x480;
    temp_11 = uint(temp_10) >> 2;
    temp_12 = temp_11 >> 2;
    temp_13 = int(temp_11) & 3;
    temp_14 = vp_c7.data[int(temp_12)][temp_13];
    temp_15 = int(temp_11) + 1;
    temp_16 = uint(temp_15) >> 2;
    temp_17 = temp_15 & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x000088: 0x4C68101000070D05 Fmul
    temp_19 = temp_3 * vp_c4.data[0].x;
    // 0x000090: 0xEFD87F800A47FF0C Ald
    temp_20 = in_attr2.y;
    // 0x000098: 0xEF95007068071102 Ldc
    temp_21 = temp_4 + 0x680;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_22 >> 2;
    temp_24 = int(temp_22) & 3;
    temp_25 = vp_c7.data[int(temp_23)][temp_24];
    temp_26 = int(temp_22) + 1;
    temp_27 = uint(temp_26) >> 2;
    temp_28 = temp_26 & 3;
    temp_29 = vp_c7.data[int(temp_27)][temp_28];
    // 0x0000A8: 0x4C68101000470D0B Fmul
    temp_30 = temp_3 * vp_c4.data[1].x;
    // 0x0000B0: 0xEFD87F800907FF0F Ald
    temp_31 = in_attr1.x;
    // 0x0000B8: 0x4C68101000870D0D Fmul
    temp_32 = temp_3 * vp_c4.data[2].x;
    // 0x0000C8: 0xEFD87F800947FF10 Ald
    temp_33 = in_attr1.y;
    // 0x0000D0: 0xEF94007048871107 Ldc
    temp_34 = temp_4 + 0x488;
    temp_35 = uint(temp_34) >> 2;
    temp_36 = temp_35 >> 2;
    temp_37 = int(temp_35) & 3;
    temp_38 = vp_c7.data[int(temp_36)][temp_37];
    // 0x0000D8: 0xEF94007068871108 Ldc
    temp_39 = temp_4 + 0x688;
    temp_40 = uint(temp_39) >> 2;
    temp_41 = temp_40 >> 2;
    temp_42 = int(temp_40) & 3;
    temp_43 = vp_c7.data[int(temp_41)][temp_42];
    // 0x0000E8: 0x49A0029000171813 Ffma
    temp_44 = fma(temp_5, vp_c4.data[0].y, temp_19);
    // 0x0000F0: 0xEFD87F801007FF0E Ald
    temp_45 = in_attr8.x;
    // 0x0000F8: 0x49A0059000571814 Ffma
    temp_46 = fma(temp_5, vp_c4.data[1].y, temp_30);
    // 0x000108: 0xEFD87F800A87FF06 Ald
    temp_47 = in_attr2.z;
    // 0x000110: 0x49A0069000971815 Ffma
    temp_48 = fma(temp_5, vp_c4.data[2].y, temp_32);
    // 0x000118: 0xEFD87F800987FF05 Ald
    temp_49 = in_attr1.z;
    // 0x000128: 0x4C68101000071712 Fmul
    temp_50 = temp_7 * vp_c4.data[0].x;
    // 0x000130: 0x49A0099000270A13 Ffma
    temp_51 = fma(temp_9, vp_c4.data[0].z, temp_44);
    // 0x000138: 0x4C68101000871716 Fmul
    temp_52 = temp_7 * vp_c4.data[2].x;
    // 0x000148: 0x4C68101000471717 Fmul
    temp_53 = temp_7 * vp_c4.data[1].x;
    // 0x000150: 0x49A00A1000670A14 Ffma
    temp_54 = fma(temp_9, vp_c4.data[1].z, temp_46);
    // 0x000158: 0x49A00A9000A70A15 Ffma
    temp_55 = fma(temp_9, vp_c4.data[2].z, temp_48);
    // 0x000168: 0x49A0091000170C0D Ffma
    temp_56 = fma(temp_20, vp_c4.data[0].y, temp_50);
    // 0x000170: 0x4C68101000070F12 Fmul
    temp_57 = temp_31 * vp_c4.data[0].x;
    // 0x000178: 0x4C58101000371311 Fadd
    temp_58 = temp_51 + vp_c4.data[0].w;
    // 0x000188: 0x49A00B1000970C0B Ffma
    temp_59 = fma(temp_20, vp_c4.data[2].y, temp_52);
    // 0x000190: 0x49A00B9000570C0C Ffma
    temp_60 = fma(temp_20, vp_c4.data[1].y, temp_53);
    // 0x000198: 0x4C58101000B71515 Fadd
    temp_61 = temp_55 + vp_c4.data[2].w;
    // 0x0001A8: 0x4C68101000870F16 Fmul
    temp_62 = temp_31 * vp_c4.data[2].x;
    // 0x0001B0: 0x4C68101000470F17 Fmul
    temp_63 = temp_31 * vp_c4.data[1].x;
    // 0x0001B8: 0x49A009100017100F Ffma
    temp_64 = fma(temp_33, vp_c4.data[0].y, temp_57);
    // 0x0001C8: 0x5080000000470012 Mufu
    temp_65 = 1.0 / temp_14;
    // 0x0001D0: 0x4C58101000771414 Fadd
    temp_66 = temp_54 + vp_c4.data[1].w;
    // 0x0001D8: 0x59A0010000071111 Ffma
    temp_67 = fma(temp_58, temp_14, temp_25);
    // 0x0001E8: 0xEFD87F800AC7FF00 Ald
    temp_68 = in_attr2.w;
    // 0x0001F0: 0x49A0049400070E09 Ffma
    temp_69 = fma(temp_45, vp_c5.data[0].x, temp_6);
    // 0x0001F8: 0xEFF07F800D07FF11 Ast
    out_attr5.x = temp_67;
    // 0x000208: 0x59A0040000771507 Ffma
    temp_70 = fma(temp_61, temp_38, temp_43);
    // 0x000210: 0xEFF07F800E07FF09 Ast
    out_attr6.x = temp_69;
    // 0x000218: 0x49A0021400170E0E Ffma
    temp_71 = fma(temp_45, vp_c5.data[0].y, temp_8);
    // 0x000228: 0xEFF07F800D87FF07 Ast
    out_attr5.z = temp_70;
    // 0x000230: 0x49A0069000270604 Ffma
    temp_72 = fma(temp_47, vp_c4.data[0].z, temp_56);
    // 0x000238: 0xEFF07F800E47FF0E Ast
    out_attr6.y = temp_71;
    // 0x000248: 0x49A0059000A7060B Ffma
    temp_73 = fma(temp_47, vp_c4.data[2].z, temp_59);
    // 0x000250: 0x49A006100067060C Ffma
    temp_74 = fma(temp_47, vp_c4.data[1].z, temp_60);
    // 0x000258: 0x59A0018000171406 Ffma
    temp_75 = fma(temp_66, temp_18, temp_29);
    // 0x000268: 0x5080000000470101 Mufu
    temp_76 = 1.0 / temp_18;
    // 0x000270: 0x49A00B100097100A Ffma
    temp_77 = fma(temp_33, vp_c4.data[2].y, temp_62);
    // 0x000278: 0xEFF07F800D47FF06 Ast
    out_attr5.y = temp_75;
    // 0x000288: 0x5C59100001170213 Fadd
    temp_78 = 0.0 - temp_25;
    temp_79 = temp_78 + temp_67;
    // 0x000290: 0x49A00B9000571010 Ffma
    temp_80 = fma(temp_33, vp_c4.data[1].y, temp_63);
    // 0x000298: 0x4C5810180BA7070D Fadd
    temp_81 = temp_70 + vp_c6.data[46].z;
    // 0x0002A8: 0x0103F8000007F008 Mov32i
    // 0x0002B0: 0x49A007900027050F Ffma
    temp_82 = fma(temp_49, vp_c4.data[0].z, temp_64);
    // 0x0002B8: 0x49A0051000A7050A Ffma
    temp_83 = fma(temp_49, vp_c4.data[2].z, temp_77);
    // 0x0002C8: 0x51A2091002871302 Ffma
    temp_84 = 0.0 - vp_c4.data[10].x;
    temp_85 = fma(temp_79, temp_65, temp_84);
    // 0x0002D0: 0x49A0081000670510 Ffma
    temp_86 = fma(temp_49, vp_c4.data[1].z, temp_80);
    // 0x0002D8: 0x5C59100000670313 Fadd
    temp_87 = 0.0 - temp_29;
    temp_88 = temp_87 + temp_75;
    // 0x0002E8: 0x4C5810180B970603 Fadd
    temp_89 = temp_75 + vp_c6.data[46].y;
    // 0x0002F0: 0x4C6810180C270D05 Fmul
    temp_90 = temp_81 * vp_c6.data[48].z;
    // 0x0002F8: 0x4C6810180C670D12 Fmul
    temp_91 = temp_81 * vp_c6.data[49].z;
    // 0x000308: 0x4C6810180CA70D0D Fmul
    temp_92 = temp_81 * vp_c6.data[50].z;
    // 0x000310: 0x4C58101002B70814 Fadd
    temp_93 = 1.0 + vp_c4.data[10].w;
    // 0x000318: 0x4C58101002A70808 Fadd
    temp_94 = 1.0 + vp_c4.data[10].z;
    // 0x000328: 0x5080000000471414 Mufu
    temp_95 = 1.0 / temp_93;
    // 0x000330: 0x51A2009002971315 Ffma
    temp_96 = 0.0 - vp_c4.data[10].y;
    temp_97 = fma(temp_88, temp_76, temp_96);
    // 0x000338: 0x5080000000470808 Mufu
    temp_98 = 1.0 / temp_94;
    // 0x000348: 0x49A002980C170313 Ffma
    temp_99 = fma(temp_89, vp_c6.data[48].y, temp_90);
    // 0x000350: 0x49A009180C570312 Ffma
    temp_100 = fma(temp_89, vp_c6.data[49].y, temp_91);
    // 0x000358: 0x4C5810180B871101 Fadd
    temp_101 = temp_67 + vp_c6.data[46].x;
    // 0x000368: 0x49A006980C970303 Ffma
    temp_102 = fma(temp_89, vp_c6.data[50].y, temp_92);
    // 0x000370: 0x4C58300C0377070D Fadd
    temp_103 = 0.0 - vp_c3.data[13].w;
    temp_104 = temp_70 + temp_103;
    // 0x000378: 0x4C58300C03370609 Fadd
    temp_105 = 0.0 - vp_c3.data[12].w;
    temp_106 = temp_75 + temp_105;
    // 0x000388: 0xEFF07F800B87FF0D Ast
    out_attr3.z = temp_104;
    // 0x000390: 0x49A009980C070113 Ffma
    temp_107 = fma(temp_101, vp_c6.data[48].x, temp_99);
    // 0x000398: 0xEFF07F800B47FF09 Ast
    out_attr3.y = temp_106;
    // 0x0003A8: 0x49A009180C470112 Ffma
    temp_108 = fma(temp_101, vp_c6.data[49].x, temp_100);
    // 0x0003B0: 0x49A001980C870105 Ffma
    temp_109 = fma(temp_101, vp_c6.data[50].x, temp_102);
    // 0x0003B8: 0x5C68100000F70F03 Fmul
    temp_110 = temp_82 * temp_82;
    // 0x0003C8: 0x5C68100000470401 Fmul
    temp_111 = temp_72 * temp_72;
    // 0x0003D0: 0x5C68100000870202 Fmul
    temp_112 = temp_85 * temp_98;
    // 0x0003D8: 0x5C68100001471514 Fmul
    temp_113 = temp_97 * temp_95;
    // 0x0003E8: 0x4C98079400A70015 Mov
    // 0x0003F0: 0x4C6810180BB70508 Fmul
    temp_114 = temp_109 * vp_c6.data[46].w;
    // 0x0003F8: 0x59A0018001071003 Ffma
    temp_115 = fma(temp_86, temp_86, temp_110);
    // 0x000408: 0xEFF07F801187FF08 Ast
    out_attr9.z = temp_114;
    // 0x000410: 0x59A0008000C70C05 Ffma
    temp_116 = fma(temp_74, temp_74, temp_111);
    // 0x000418: 0x4C98079400B7000E Mov
    // 0x000428: 0x4C68100C00471101 Fmul
    temp_117 = temp_67 * vp_c3.data[1].x;
    // 0x000430: 0x4C68100C00071109 Fmul
    temp_118 = temp_67 * vp_c3.data[0].x;
    // 0x000438: 0x51A10A9400C71415 Ffma
    temp_119 = 0.0 - vp_c5.data[2].z;
    temp_120 = fma(temp_113, temp_119, vp_c5.data[3].x);
    // 0x000448: 0x59A0018000A70A0D Ffma
    temp_121 = fma(temp_83, temp_83, temp_115);
    // 0x000450: 0x59A0028000B70B05 Ffma
    temp_122 = fma(temp_73, temp_73, temp_116);
    // 0x000458: 0x5080000000570D0D Mufu
    temp_123 = inversesqrt(temp_121);
    // 0x000468: 0x4C68100C00871103 Fmul
    temp_124 = temp_67 * vp_c3.data[2].x;
    // 0x000470: 0x5080000000570505 Mufu
    temp_125 = inversesqrt(temp_122);
    // 0x000478: 0x4C6810180BB71212 Fmul
    temp_126 = temp_108 * vp_c6.data[46].w;
    // 0x000488: 0x51A1071400D71414 Ffma
    temp_127 = 0.0 - vp_c5.data[2].w;
    temp_128 = fma(temp_113, temp_127, vp_c5.data[3].y);
    // 0x000490: 0xEFF07F801147FF12 Ast
    out_attr9.y = temp_126;
    // 0x000498: 0x4C5830180B07110E Fadd
    temp_129 = 0.0 - vp_c6.data[44].x;
    temp_130 = temp_67 + temp_129;
    // 0x0004A8: 0x49A0018C00970608 Ffma
    temp_131 = fma(temp_75, vp_c3.data[2].y, temp_124);
    // 0x0004B0: 0x4C6810180BB71313 Fmul
    temp_132 = temp_107 * vp_c6.data[46].w;
    // 0x0004B8: 0x49A0008C00570601 Ffma
    temp_133 = fma(temp_75, vp_c3.data[1].y, temp_117);
    // 0x0004C8: 0xEFF07F801107FF13 Ast
    out_attr9.x = temp_132;
    // 0x0004D0: 0x4C58101002070703 Fadd
    temp_134 = temp_70 + vp_c4.data[8].x;
    // 0x0004D8: 0x49A0048C00170609 Ffma
    temp_135 = fma(temp_75, vp_c3.data[0].y, temp_118);
    // 0x0004E8: 0x4C5830180B170612 Fadd
    temp_136 = 0.0 - vp_c6.data[44].y;
    temp_137 = temp_75 + temp_136;
    // 0x0004F0: 0x5C68100000D70F0F Fmul
    temp_138 = temp_82 * temp_123;
    // 0x0004F8: 0x5C68100000570B06 Fmul
    temp_139 = temp_73 * temp_125;
    // 0x000508: 0xEFF07F800807FF0F Ast
    out_attr0.x = temp_138;
    // 0x000510: 0x4C68101803870E13 Fmul
    temp_140 = temp_130 * vp_c6.data[14].x;
    // 0x000518: 0xEFF07F800987FF06 Ast
    out_attr1.z = temp_139;
    // 0x000528: 0x49A00A9400870215 Ffma
    temp_141 = fma(temp_112, vp_c5.data[2].x, temp_120);
    // 0x000530: 0x49A00A1400970214 Ffma
    temp_142 = fma(temp_112, vp_c5.data[2].y, temp_128);
    // 0x000538: 0xEFF07F800E87FF15 Ast
    out_attr6.z = temp_141;
    // 0x000548: 0x5C68100000D70A0A Fmul
    temp_143 = temp_83 * temp_123;
    // 0x000550: 0xEFF07F800EC7FF14 Ast
    out_attr6.w = temp_142;
    // 0x000558: 0x5C68100000570C0C Fmul
    temp_144 = temp_74 * temp_125;
    // 0x000568: 0xEFF07F800887FF0A Ast
    out_attr0.z = temp_143;
    // 0x000570: 0x49A0008C00670302 Ffma
    temp_145 = fma(temp_134, vp_c3.data[1].z, temp_133);
    // 0x000578: 0xEFF07F800947FF0C Ast
    out_attr1.y = temp_144;
    // 0x000588: 0x49A0008C0067070E Ffma
    temp_146 = fma(temp_70, vp_c3.data[1].z, temp_133);
    // 0x000590: 0x49A0040C00A70301 Ffma
    temp_147 = fma(temp_134, vp_c3.data[2].z, temp_131);
    // 0x000598: 0x4C58300C02F71116 Fadd
    temp_148 = 0.0 - vp_c3.data[11].w;
    temp_149 = temp_67 + temp_148;
    // 0x0005A8: 0x49A0048C00270303 Ffma
    temp_150 = fma(temp_134, vp_c3.data[0].z, temp_135);
    // 0x0005B0: 0xEFF07F800B07FF16 Ast
    out_attr3.x = temp_149;
    // 0x0005B8: 0x5C68100000D71011 Fmul
    temp_151 = temp_86 * temp_123;
    // 0x0005C8: 0x49A0048C00270709 Ffma
    temp_152 = fma(temp_70, vp_c3.data[0].z, temp_135);
    // 0x0005D0: 0xEFF07F800847FF11 Ast
    out_attr0.y = temp_151;
    // 0x0005D8: 0x5C68100000570404 Fmul
    temp_153 = temp_72 * temp_125;
    // 0x0005E8: 0x49A0040C00A7070D Ffma
    temp_154 = fma(temp_70, vp_c3.data[2].z, temp_131);
    // 0x0005F0: 0xEFF07F800907FF04 Ast
    out_attr1.x = temp_153;
    // 0x0005F8: 0x5C68100000F70605 Fmul
    temp_155 = temp_139 * temp_138;
    // 0x000608: 0x49A0099803971212 Ffma
    temp_156 = fma(temp_137, vp_c6.data[14].y, temp_140);
    // 0x000610: 0x4C5830180B270710 Fadd
    temp_157 = 0.0 - vp_c6.data[44].z;
    temp_158 = temp_70 + temp_157;
    // 0x000618: 0x5C68100000A70C08 Fmul
    temp_159 = temp_144 * temp_143;
    // 0x000628: 0x4C58100C0037090B Fadd
    temp_160 = temp_152 + vp_c3.data[0].w;
    // 0x000630: 0x4C58100C00370303 Fadd
    temp_161 = temp_150 + vp_c3.data[0].w;
    // 0x000638: 0x59A2028000A70409 Ffma
    temp_162 = 0.0 - temp_155;
    temp_163 = fma(temp_153, temp_143, temp_162);
    // 0x000648: 0x4C98079803C70005 Mov
    // 0x000650: 0x49A0091803A71010 Ffma
    temp_164 = fma(temp_158, vp_c6.data[14].z, temp_156);
    // 0x000658: 0x59A2040001170607 Ffma
    temp_165 = 0.0 - temp_159;
    temp_166 = fma(temp_139, temp_151, temp_165);
    // 0x000668: 0x5C68100001170411 Fmul
    temp_167 = temp_153 * temp_151;
    // 0x000670: 0x4C68100C02070304 Fmul
    temp_168 = temp_161 * vp_c3.data[8].x;
    // 0x000678: 0x4C58100C00770E0E Fadd
    temp_169 = temp_146 + vp_c3.data[1].w;
    // 0x000688: 0x4C68101802C70B0B Fmul
    temp_170 = temp_160 * vp_c6.data[11].x;
    // 0x000690: 0x51A0029803B71010 Ffma
    temp_171 = fma(temp_164, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000698: 0x5C68100000070706 Fmul
    temp_172 = temp_166 * temp_68;
    // 0x0006A8: 0xEFF07F801047FF10 Ast
    out_attr8.y = temp_171;
    // 0x0006B0: 0x59A2088000F70C11 Ffma
    temp_173 = 0.0 - temp_167;
    temp_174 = fma(temp_144, temp_138, temp_173);
    // 0x0006B8: 0xEFF07F800A07FF06 Ast
    out_attr2.x = temp_172;
    // 0x0006C8: 0x4C68100C02870305 Fmul
    temp_175 = temp_161 * vp_c3.data[10].x;
    // 0x0006D0: 0x4C68100C02470307 Fmul
    temp_176 = temp_161 * vp_c3.data[9].x;
    // 0x0006D8: 0x4C58100C00770202 Fadd
    temp_177 = temp_145 + vp_c3.data[1].w;
    // 0x0006E8: 0x4C68100C01C70303 Fmul
    temp_178 = temp_161 * vp_c3.data[7].x;
    // 0x0006F0: 0x5C68100000070909 Fmul
    temp_179 = temp_163 * temp_68;
    // 0x0006F8: 0x5C68100000071111 Fmul
    temp_180 = temp_174 * temp_68;
    // 0x000708: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_179;
    // 0x000710: 0x4C58100C00B70D0D Fadd
    temp_181 = temp_154 + vp_c3.data[2].w;
    // 0x000718: 0xEFF07F800A87FF11 Ast
    out_attr2.z = temp_180;
    // 0x000728: 0x49A0059802D70E0B Ffma
    temp_182 = fma(temp_169, vp_c6.data[11].y, temp_170);
    // 0x000730: 0xEFF07F800C87FF0D Ast
    out_attr4.z = temp_181;
    // 0x000738: 0x4C58100C00B70101 Fadd
    temp_183 = temp_147 + vp_c3.data[2].w;
    // 0x000748: 0x49A0020C02170204 Ffma
    temp_184 = fma(temp_177, vp_c3.data[8].y, temp_168);
    // 0x000750: 0x49A0028C02970200 Ffma
    temp_185 = fma(temp_177, vp_c3.data[10].y, temp_175);
    // 0x000758: 0x49A0038C02570207 Ffma
    temp_186 = fma(temp_177, vp_c3.data[9].y, temp_176);
    // 0x000768: 0x49A0018C01D70203 Ffma
    temp_187 = fma(temp_177, vp_c3.data[7].y, temp_178);
    // 0x000770: 0x49A0059802E70D0B Ffma
    temp_188 = fma(temp_181, vp_c6.data[11].z, temp_182);
    // 0x000778: 0x4C98079803070008 Mov
    // 0x000788: 0x49A0020C02270104 Ffma
    temp_189 = fma(temp_183, vp_c3.data[8].z, temp_184);
    // 0x000790: 0x49A0000C02A70100 Ffma
    temp_190 = fma(temp_183, vp_c3.data[10].z, temp_185);
    // 0x000798: 0x49A0038C02670107 Ffma
    temp_191 = fma(temp_183, vp_c3.data[9].z, temp_186);
    // 0x0007A8: 0x49A0018C01E70103 Ffma
    temp_192 = fma(temp_183, vp_c3.data[7].z, temp_187);
    // 0x0007B0: 0x51A0041802F70B0B Ffma
    temp_193 = fma(temp_188, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x0007B8: 0x4C58100C02370404 Fadd
    temp_194 = temp_189 + vp_c3.data[8].w;
    // 0x0007C8: 0xEFF07F801007FF0B Ast
    out_attr8.x = temp_193;
    // 0x0007D0: 0x4C58100C02B70000 Fadd
    temp_195 = temp_190 + vp_c3.data[10].w;
    // 0x0007D8: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_194;
    // 0x0007E8: 0x4C58100C02770707 Fadd
    temp_196 = temp_191 + vp_c3.data[9].w;
    // 0x0007F0: 0xEFF07F8007C7FF00 Ast
    gl_Position.w = temp_195;
    // 0x0007F8: 0x4C58100C01F70303 Fadd
    temp_197 = temp_192 + vp_c3.data[7].w;
    // 0x000808: 0xEFF07F800787FF07 Ast
    gl_Position.z = temp_196;
    // 0x000810: 0xEFF07F800707FF03 Ast
    gl_Position.x = temp_197;
    // 0x000818: 0xE30000000007000F Exit
    return;
}
